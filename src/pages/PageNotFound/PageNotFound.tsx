import pageFailed from "@Assets/images/PageNotFound/404-failed.svg";
//Hocs
import withScrollToTop from "@Hocs/withScrollToTop";
import { Button, Image, Typography } from "antd";
import React from 'react';
import { useLocation } from "react-router-dom";
import styles from "./PageNotFound.module.less";
const { Paragraph } = Typography;

const PageNotFound = (props: any) => {
  const history = useLocation();

  return (
    <div className={styles.Page}>
      <Image src={pageFailed}  preview={false} alt="img"></Image>
      <Paragraph>Trang này không hiển thị</Paragraph>
      <Paragraph>Có thể liên kết đã hỏng hoặc trang đã bị gỡ.
        Hãy kiểm tra xem liên kết mà bạn đang cố mở có chính xác không.</Paragraph>

      <Button onClick={()=>{
        // history.push("/")
      }} >Đi tới trang chủ</Button>

    </div>
  );
};

export default withScrollToTop(PageNotFound);
