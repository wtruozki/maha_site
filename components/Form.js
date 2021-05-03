import { TextField, Button } from "@material-ui/core";

import Router from "next/router";

import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    backgroundColor: "#fff",
    padding: "1.5em",
    flexDirection: "column",
  },
  input: {
    display: "flex",
    marginBottom: "2em",
  },
  para: {
    color: "#000",
    marginBottom: "2em",
  },
  button: {
    padding: "1em",
    marginTop: "2em",
  },
});

const Form = () => {
  const classes = useStyles();
  const [contact, setContact] = useState({
    name: "",
    kana: "",
    email: "",
    category: "",
    message: "",
    replyTo: "@",
    accessKey: process.env.NEXT_PUBLIC_ACCESS_KEY,
  });

  const [category, setCategory] = useState("");
  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  //   セレクトバーの表示に関わること
  const changeSelect = (e) => {
    setContact(e.target.value);
    setCategory(e.target.value);
  };

  // フォームの値を取得
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);

    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        //成功したらsuccessページに飛ぶ
        Router.push("/success");
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  return (
    <div>
      <form
        className={classes.root}
        method="post"
        action="https://api.staticforms.xyz/submit"
        onSubmit={handleSubmit}
      >
        <p className={classes.para}>ご意見ご要望</p>
        <TextField
          type="text"
          id="standard-basic"
          label="お名前"
          className={classes.input}
          name="name"
          onChange={handleChange}
          required
        />
        <TextField
          id="standard-basic"
          label="フリガナ"
          type="text"
          className={classes.input}
          name="kana"
          onChange={handleChange}
          required
        />
        <TextField
          id="standard-basic"
          label="メールアドレス"
          type="email"
          className={classes.input}
          name="email"
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-textarea"
          label="ご意見・ご要望"
          name="message"
          multiline
          type="text"
          onChange={handleChange}
          rows={4}
          className={classes.input}
          required
        />
        <Button
          type="submit"
          className={classes.button}
          variant="outlined"
          color="primary"
        >
          送信する
        </Button>
      </form>
    </div>
  );
};

export default Form;
