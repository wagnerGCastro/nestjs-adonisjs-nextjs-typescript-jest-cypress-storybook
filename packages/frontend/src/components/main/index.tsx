import React from 'react';
import * as S from '@/components/main/styles';

const Main = ({ title = 'React Avançado', description = 'TypeScript, ReactJS, NextJS e Styled Components' }) => (
  <S.Wrapper>
    <S.Logo src="/image/logo.svg" alt="Imagem de um átomo e React Avançado escrito ao lado." />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/image/hero-illustration.svg" alt="Um desenvolvedor de frente para uma tela com código." />
  </S.Wrapper>
);

export default Main;
