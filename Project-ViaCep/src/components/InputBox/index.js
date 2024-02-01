
import { Input } from "../Input"
import { Label } from "../Label/Index"

import { FieldContent } from "./style"

// //Definir props- AMANHÃ









export const InputBox = ({
    fieldWidth = 100,
    editable= false,
    textLabel,
    placeholder,
    fieldValue = null,
    onchangeText,
    KeyType = 'default',
    maxLenght,
}) => {
    return(

     <FieldContent fieldWidth={fieldWidth}>

          {/* {label} */}
         <Label textLabel={textLabel}/>
          {/* {input} */}
          <Input
          
          placeholder={placeholder}
          editable={editable}
          KeyType={KeyType}
          maxLenght={maxLenght}
          fieldValue={fieldValue}
          onchangeText={onchangeText}
          />

     </FieldContent>

    )
}