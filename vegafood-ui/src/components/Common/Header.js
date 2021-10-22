import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Link: AntLink } = Anchor;

function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-carrot"></i>
          <Link to="/">Vegafood</Link>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link to="/">
              <AntLink href="#hero" title="Trang chủ" />
            </Link>
            <AntLink href="#about" title="Chúng tôi là ai ?" />
            <AntLink href="#feature" title="Ăn gì ?" />
            <AntLink href="#works" title="Nấu nướng" />
            <AntLink href="#faq" title="Câu hỏi thường gặp" />
            <AntLink href="#contact" title="Tư vấn" />
            <Link to="/login">
              <AntLink href="#hero" title="Đăng nhập" />
            </Link>
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link to="/login">
                <AntLink href="#hero" title="Đăng nhập" />
              </Link>
              <AntLink href="#hero" title="Trang chủ" />
              <AntLink href="#about" title="Chúng tôi là ai ?" />
              <AntLink href="#feature" title="Ăn gì ?" />
              <AntLink href="#works" title="Nấu nướng" />
              <AntLink href="#faq" title="Câu hỏi thường gặp" />
              <AntLink href="#contact" title="Tư vấn" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Header;