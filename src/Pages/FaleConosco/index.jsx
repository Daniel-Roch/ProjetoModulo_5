import React, { useState } from 'react';
import Select from '../../Components/Form/Select';
import Textarea from '../../Components/Form/Textarea';
import Button from '../../Components/Form/Button';
import Input from '../../Components/Form/Input';
import FormContainer from '../../Components/Form/FormContainer';
import * as S from './styles';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Banner from '../../Components/Banner';
import imgBanner from '../../assets/banner-fale.jpg';
import TarefasTeste from '../../Components/TarefasTeste';

export default function FaleConosco() {
  const [selectValue, setSelectValue] = useState('');
  const [data, setData] = useState(null);
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [nomeInvalid, setNomeInvalid] = useState(false);
  const [eInvalid, setEInvalid] = useState(false);
  const [assuntoInvalid, setAssuntoInvalid] = useState(false);
  const [mensagemInvalid, setMensagemInvalid] = useState(false);

  const handleChange = (e) => {
    let nameChange = e.target.name;
    switch (nameChange) {
      case 'Nome':
        if (e.target.value.length > 7) {
          setNome(e.target.value);
          setNomeInvalid(false);
        } else {
          setNomeInvalid(true);
        }
        break;
      case 'Email':
        const regEmail = /\w@.+(.com|.com.br)$/g;
        if (e.target.value.match(regEmail) != null) {
          setEmail(e.target.value);
          setEInvalid(false);
        } else {
          setEInvalid(true);
        }
        break;
      case 'Assunto':
        if (e.target.value) {
          setAssunto(e.target.value);
          setAssuntoInvalid(false);
        } else {
          setAssuntoInvalid(true);
        }
        break;
      case 'Mensagem':
        if (e.target.value) {
          setMensagem(e.target.value);
          setMensagemInvalid(false);
        } else {
          setMensagemInvalid(true);
        }
        break;

      default:
        throw new Error('Campo Invalido');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((nome, email, assunto, mensagem)) {
    }
  };
  const requisicaoUnidade = async (e) => {
    let cidade = e.target.value;
    let response = await fetch('https://still-atoll-05418.herokuapp.com/store')
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => res);
    setSelectValue(cidade);
    setData(response.result);
  };

  return (
    <>
      <Header />
      <S.Container>
        <Banner
          bannerPositionResponsive="atendimento"
          opacity="0.5"
          bannerPosition="center"
          url={imgBanner}
        >
          <S.Div
            alignItems="center"
            display="flex"
            justifyContent="center"
            background="rgba(0,0,0,0.7)"
          >
            <S.Titulo>
              Atendimento <span>ao cliente</span>
            </S.Titulo>
          </S.Div>
        </Banner>
        <S.Div display="flex" direction="row" height="620px">
          <FormContainer>
            <h1>Fale conosco!</h1>
            <S.Div direction="row" display="flex" justifyContent="center">
              <Select
                onChange={handleChange}
                required
                widthResponsive="400px"
                labelAlign="flex-start"
                width="292px"
                label="Estado:"
                htmlFor="Estado"
                name="Estado"
                id="estado"
              >
                <option defaultvalue name="Selecione" disabled selected>
                  Selecione
                </option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </Select>
              <Select
                onChange={handleChange}
                widthResponsive="400px"
                labelAlign="flex-start"
                width="292px"
                label="Cidade:"
                htmlFor="Cidade"
                name="Cidade"
                id="cidade"
              >
                <option defaultvalue name="Selecione" disabled selected>
                  Selecione
                </option>
                <option value="1" name="Rio de Janeiro">
                  Rio de Janeiro
                </option>
                <option value="2" name="São Paulo">
                  São Paulo
                </option>
                <option value="3" name="Paraná">
                  Curitiba
                </option>
              </Select>
            </S.Div>
            <Input
              onChange={handleChange}
              width="585px"
              widthResponsive="800px"
              height="30px"
              htmlFor="Assunto"
              type="text"
              nome="Assunto:"
              name="Assunto"
              placeholder="Digite aqui"
            >
              Assunto:
            </Input>
            {assuntoInvalid && <S.Error>Assunto inválido</S.Error>}
            <Input
              onChange={handleChange}
              width="585px"
              widthResponsive="800px"
              height="30px"
              nome="Nome:"
              htmlFor="Nome"
              placeholder="Digite seu nome"
              name="Nome"
              type="text"
            >
              Nome:
            </Input>
            {nomeInvalid && <S.Error>Nome inválido</S.Error>}
            <Input
              widthResponsive="800px"
              onChange={handleChange}
              width="585px"
              height="30px"
              nome="Email:"
              htmlFor="Email"
              placeholder="Digite seu email"
              name="Email"
              type="email"
            >
              Email:
            </Input>
            {eInvalid && <S.Error>E-mail inválido</S.Error>}
            <Textarea
              onChange={handleChange}
              width="585px"
              htmlFor="Mensagem"
              placeholder="Digite sua mensagem"
              name="Mensagem"
              type="text"
            >
              Mensagem:
            </Textarea>
            {mensagemInvalid && <S.Error>Mensagem inválida</S.Error>}
            <S.Div
              display="flex"
              direction="row-reverse"
              alignSelf="center"
              margin="0px 77px 0px 0px"
            >
              <Button
                width="150px"
                height="30px"
                type="submit"
                onSubmit={handleChange}
              >
                Enviar
              </Button>
            </S.Div>
          </FormContainer>
          <FormContainer>
            <h1>Procure uma unidade próxima a você</h1>
            <Select
              label=" Escolha a cidade que deseja encontrar uma de nossas unidades."
              htmlFor="Cidade unidade"
              onChange={requisicaoUnidade}
              width="585px"
              labelAlign="center"
            >
              <option>Selecione</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Curitiba">Curitiba</option>
            </Select>

            <S.Div scroll="active">
              <S.Lista>
                {data &&
                  data.map((item, index) =>
                    item.address.includes(selectValue) ? (
                      <li key={index}>
                        <p>Endereço: {item.address}</p>
                        <p>Email: {item.email}</p>
                        <p>Telefone: {item.phone}</p>
                      </li>
                    ) : (
                      ''
                    )
                  )}
              </S.Lista>
            </S.Div>
          </FormContainer>
        </S.Div>
      </S.Container>
      <TarefasTeste />
      <Footer />
    </>
  );
}
