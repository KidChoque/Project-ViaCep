
import { Input } from "../Input"
import { Label } from "../Label/Index"


import { FieldContent, FieldEstado, FieldUF } from "./style"

// //Definir props- AMANHÃ









export const InputBox = ({
    fieldWidth = 100,
    editable= false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,
    KeyType = 'default',
    maxLenght
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
          onChangeText={onChangeText}
          />

     </FieldContent>

    )
}

export const UFInput = ({  
    fieldWidth,
    editable= false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,   
    KeyType = 'default',
    maxLenght}) =>{

    return(

        <FieldUF fieldWidth={fieldWidth}>
   
             {/* {label} */}
            <Label textLabel={textLabel}/>
             {/* {input} */}
             <Input
             
             placeholder={placeholder}
             editable={editable}
             KeyType={KeyType}
             maxLenght={maxLenght}
             fieldValue={fieldValue}
             onChangeText={onChangeText}
             />
   
        </FieldUF>
   
       )
  
}
export const EstadoInput = ({  
    fieldWidth,
    editable= false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,   
    KeyType = 'default',
    maxLenght}) =>{

    return(

        <FieldEstado fieldWidth={fieldWidth}>
   
             {/* {label} */}
            <Label textLabel={textLabel}/>
             {/* {input} */}
             <Input
             
             placeholder={placeholder}
             editable={editable}
             KeyType={KeyType}
             maxLenght={maxLenght}
             fieldValue={fieldValue}
             onChangeText={onChangeText}
             />
   
        </FieldEstado>
   
       )
  
}