import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPaperPlane, FaArrowLeft, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactContainer = styled.div`
  padding: 60px 20px;
  background-color: #6B5B95;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  text-align: center;
  position: relative;
`;

const GoBackButton = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #FF6F61;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 15px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #6B5B95;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  color: #6B5B95;
  font-family: 'Lato', sans-serif; /* Updated font */
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
  }
`;

const Form = styled.form`
  text-align: left;
`;

const Label = styled.label`
  margin-top: 10px;
  color: #333333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 2px solid #6B5B95;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid #6B5B95;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #88B04B;
  color: white;
  border-radius: 25px;
  margin-top: 20px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: 10px;
  }

  &:hover {
    background-color: #6B5B95;
  }
`;

const SuccessMessage = styled.div`
  color: #6B5B95;
  font-size: 1.2rem;
  margin-top: 20px;
  text-align: center;
`;

const ReturnHomeButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 25px;
  background-color: #FF6F61;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 25px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #6B5B95;
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ContactOwner = ({ currentLanguage }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    // No `e.preventDefault()` to allow normal form submission
    setFormSubmitted(true);
  };

  const text = {
    en: {
      goBack: 'Go Back',
      title: 'Contact Owner',
      name: 'Your Name:',
      email: 'Your Email:',
      message: 'Message:',
      submit: 'Send Message',
      success: 'Thank you! Your message has been sent.',
      returnHome: 'Return Home',
    },
    zh: {
      goBack: '返回',
      title: '联系主人',
      name: '您的姓名:',
      email: '您的邮箱:',
      message: '留言:',
      submit: '发送信息',
      success: '谢谢！您的信息已发送。',
      returnHome: '返回首页',
    },
  };

  const t = currentLanguage === 'en' ? text.en : text.zh;

  return (
    <ContactContainer>
      <FormWrapper>
        <GoBackButton to="/">
          <FaArrowLeft /> {t.goBack}
        </GoBackButton>
        <FormTitle><FaEnvelope /> {t.title}</FormTitle>
        {!formSubmitted ? (
          <Form 
            action="https://formsubmit.co/zhenhoselina@gmail.com" // Replace with your FormSubmit URL
            method="POST"
            onSubmit={handleSubmit}
          >
            {/* Hidden input to bypass FormSubmit's anti-spam */}
            <input type="hidden" name="_captcha" value="false" />

            <Label htmlFor="name">{t.name}</Label>
            <Input type="text" id="name" name="name" required />

            <Label htmlFor="email">{t.email}</Label>
            <Input type="email" id="email" name="email" required />

            <Label htmlFor="message">{t.message}</Label>
            <TextArea id="message" name="message" rows="5" required></TextArea>

            <SubmitButton type="submit">
              {t.submit} <FaPaperPlane />
            </SubmitButton>
          </Form>
        ) : (
          <SuccessMessage>
            {t.success}
            <ReturnHomeButton to="/">
              <FaHome /> {t.returnHome}
            </ReturnHomeButton>
          </SuccessMessage>
        )}
      </FormWrapper>
    </ContactContainer>
  );
};


export default ContactOwner;
