import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MainInput from "./MainInput";
import { CardItemType } from "../../types";
import TodoItem from "./TodoItem";

type CardProps = {
    setInputValueHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onAddTodoItemHandler: () => void,
    inputValue: string,
    todoItems?: CardItemType[],
    todoItemsLength: number,
    onChangeTodoCompleteHandler: (id: number) => void,
    emptyCard: boolean,
    priority: number,
    tabItems: string[],
    activeTabItem: number,
    onChooseTabHandler: (index: number) => void,
    clearCompeledHandler: () => void
}

const Card: React.FC<CardProps> = ({
    setInputValueHandler,
    onAddTodoItemHandler,
    inputValue,
    todoItems,
    todoItemsLength,
    onChangeTodoCompleteHandler,
    emptyCard,
    priority,
    tabItems,
    activeTabItem,
    onChooseTabHandler,
    clearCompeledHandler
}) => {
    return (
        <Box
            w='calc(100% - 20px)'
            boxShadow='0px 1px 3px 1px rgba(0, 0, 0, 0.3)'
            position='absolute'
            left='50%'
            transform={`translateX(-50%) translateY(${10*priority}px) translateZ(-${5*priority}px)`}
        >
            <MainInput
                setInputValueHandler={setInputValueHandler}
                onAddTodoItemHandler={onAddTodoItemHandler}
                inputValue={inputValue}
            />
            <Box
                w='100%'
                h='195px'
                bg='#fff'
                borderTopWidth='1px'
                borderTopStyle='solid'
                borderTopColor='gray.200'
                sx={{ perspective: '300px' }}
            >
                {emptyCard ? '' :
                    <>
                        {todoItems?.map((item, index) => 
                            <TodoItem
                                key={`${item.text}_${index}`}
                                todoItem={item}
                                onChangeTodoCompleteHandler={onChangeTodoCompleteHandler}
                            />
                        )}
                    </>
                }
            </Box>
            <Flex
                justify='space-between'
                align='center'
                bg='#fff'
                p='0 20px'
                fontSize='sm'
                h='50px'
                borderTopWidth='1px'
                borderTopStyle='solid'
                borderTopColor='gray.200'
            >
                <Text>{todoItemsLength} items left</Text>
                <Flex gap='20px'>
                    {tabItems.map((item, index) =>
                        <Box
                            key={`${item}_${index}`}
                            border={`${activeTabItem === index ? '1px solid #dad6da' : '1px solid rgba(0, 0, 0, 0)'}`}
                            p='2px 6px'
                            borderRadius='4px'
                            cursor='pointer'
                            onClick={() => onChooseTabHandler(index)}
                        >{item}</Box>
                    )}
                </Flex>
                <Button
                    fontWeight={300}
                    fontSize='14px'
                    bg='rgba(0, 0, 0, 0)'
                    _hover={{
                        bg: 'rgba(0, 0, 0, 0)'
                    }}
                    onClick={clearCompeledHandler}
                >Clear compeled</Button>
            </Flex>
        </Box>
    )
}

export default Card;