//Library
import HelmetTag from "@Common/HelmetTag/HelmetTag";
// import { useRecoilValue, useSetRecoilState } from "recoil";
//Meta
import meta from "@Metas/login";
// import loginAtom, { withUserName } from "@Recoils/Login";
//Action
import * as actions from "@Reduxs/Authentication/action";
import { Button, Checkbox, Form, Input, notification } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
//Styles
import styles from "./Login.module.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// ==================  PAGE START   ===================
const Demo = () => {
  // const loginData = useRecoilValue(loginAtom);
  // const setUseNameData = useSetRecoilState(withUserName);  

  //==================  CONST  =============================
  const { t, i18n } = useTranslation("common");
  //===================  REDUX
  const dispatch = useDispatch();
  // ==================  FUNCTION  =========================
  const onFinish = async (values?: any) => {
    //Example Callbacks
    const callback = {
      callbackOnBegin: () => {
        console.log("START");
      },
      callbackOnFailure: (err: any) => {
        // console.log("ERROR",err);
        notification.error({
          description: err?.response?.data?.message || "Lỗi chưa xác định ",
          message: "Thất bại",
        });
      },
      callbackOnFinish: () => {
        console.log("FINISH");
      },
      callbackOnSuccess: (data: any) => {
        console.log("SUCCESS");
        notification.success({
          description: "Đăng nhập thành công",
          message: "Đăng nhập thành công",
        });
      },
    };
    await dispatch(
      actions.login(
        {
          username: values?.username,
          password: values?.password,
        },
        callback
      )
    );
  };
  const onFinishFailed = (errorInfo: any) => {
    // console.log('Failed:', errorInfo);
  };
  // ==================  HOOK=============
  // ==================  MAIN START   ===================
  return (
    <div className={styles.Page}>

      <HelmetTag meta={meta} />
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label={t("LOGIN_USERNAME")}
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("LOGIN_PASSWORD")}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>{t("LOGIN_REMEMBER_ME")}</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    // <button
    // onClick={()=>{
    //   globalAny.myEmitter.emit('event', "My Emit");
    // }}
    // >Emit</button>
  );
};

export default Demo;
