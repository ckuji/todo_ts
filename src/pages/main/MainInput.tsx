import React from "react";
import { Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

type MainInputProps = {
    setInputValueHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onAddTodoItemHandler: () => void,
    inputValue: string,
}

const MainInput: React.FC<MainInputProps> = ({
    setInputValueHandler,
    onAddTodoItemHandler,
    inputValue
}) => {
    return (
        <InputGroup
            h='65px'
            borderBottomWidth='1px'
            borderBottomStyle='solid'
            borderBottomColor='gray.100'
        >
                <InputLeftAddon
                    h='100%'
                    position='relative'
                    bg='#fff'
                    borderRadius='0'
                    border='none'
                    w='50px'
                >
                    <Button
                        position='absolute'
                        top='0px'
                        left='0px'
                        w='50px'
                        h='100%'
                        borderRadius='0'
                        bg='#fff'
                        isDisabled={!inputValue}
                        _hover={{
                            bg: '#fff'
                        }}
                        _disabled={{
                            cursor: 'inherit'
                        }}
                        onClick={onAddTodoItemHandler}
                    >
                        <ChevronDownIcon w='35px' h='35px' color={inputValue ? 'gray.500' : 'gray.300'}/>
                    </Button>
                </InputLeftAddon>
                <Input
                    placeholder='What needs to be done?'
                    h='100%'
                    fontSize='xl'
                    fontWeight='300'
                    bg='#fff'
                    borderRadius='0'
                    border='none'
                    _placeholder={{
                        fontStyle: 'italic',
                        color: 'gray.300'
                    }}
                    _hover={{
                        border: 'auto',
                    }}
                    _focusVisible={{
                        outline: 'none'
                    }}
                    value={inputValue}
                    onChange={setInputValueHandler}
                />
            </InputGroup>
    )
};

export default MainInput;