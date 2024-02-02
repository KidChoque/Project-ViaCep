import { useEffect, useState } from "react";
import { ScrollForm, ContainerForm, UFEstado } from "./style";
import { EstadoInput, InputBox, UFInput } from "../../components/InputBox";
import axios from "axios";

export function Home() {
  //hooks - states
  const [cep, setCep] = useState("09350450");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  
  //hooks - effect - Chamada da API
  const getData = async () => {
    const { cep } = await axios.get(`viacep.com.br/ws/${cep}/json/`);
    setLogradouro(logradouro);
    setBairro(bairro);
    setCidade(cidade);
    setUf(uf);
    
  };

  useEffect(async () => {
     await getData();
  }, [cep]);

  return (
    //ScroollForm
    //ContainerForm
    //InputBox
    //Label
    //Input

    <ScrollForm>
      <ContainerForm>
        <>
          <InputBox
            textLabel="Informe CEP"
            placeholder={"CEP..."}
            KeyType="numeric"
            maxLenght={8}
            editable={true}
            onChangeText={setCep}
          />
          <InputBox textLabel="Endereço" placeholder={"Endereço..."} />
          <InputBox textLabel="Bairro" placeholder={"Bairro..."} />
          <InputBox textLabel="Cidade" placeholder={"Cidade..."} />

          <UFEstado>
            <EstadoInput textLabel="Estado" placeholder={"Estado..."} />
            <UFInput textLabel="UF" placeholder={"UF..."} />
          </UFEstado>
        </>
      </ContainerForm>
    </ScrollForm>
  );
}
