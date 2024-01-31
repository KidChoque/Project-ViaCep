// HeaderContainer(View)(
// HeaderContent(SafeAreaView)
// HeaderText(Text)

import { HeaderContainer, HeaderContent, HeaderText } from "./Style";


export function Header(){
    return(
    <HeaderContainer>
        <HeaderContent>
            <HeaderText>Consumo da API ViaCep</HeaderText>
        </HeaderContent>
    </HeaderContainer>
    )
}