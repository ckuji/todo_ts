import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CardItemType } from "../../types";
import Card from "./Card";

const Main: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [todoItems, setTodoItems] = useState<CardItemType[]>([]);
    const [todoSortedItems, setTodoSortedItems] = useState<CardItemType[][]>([]);

    let tabItems: string[] = ['All', 'Active', 'Completed'];
    const [activeTabItem, setActiveTabItem] = useState<number>(0);

    const onChooseTabHandler = (index: number) => {
        setActiveTabItem(index);
    };

    const setInputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onAddTodoItemHandler = () => {
        const newIdHelper : number = todoItems.at(-1)?.id ?? -1;
        setTodoItems([...todoItems, {id: newIdHelper + 1, text: inputValue, completed: false}]);
        setInputValue('');
    }

    const onChangeTodoCompleteHandler = (id: number) => {
        const newTodoItems = todoItems.map((unit) => {
            if(unit.id === id) {
                return {...unit, completed: !unit.completed};
            }
            return unit;
        });
        setTodoItems(newTodoItems);
    }

    const clearCompeledHandler = () => {
        const todoActiveItems = todoItems.filter((unit) => unit.completed === false);
        setTodoItems(todoActiveItems);
    }

    useEffect(() => {
        let todoShowedItems: CardItemType[] = todoItems;
        if(tabItems[activeTabItem] === 'Active') {
            todoShowedItems = todoItems.filter((unit) => unit.completed === false);
        };
        if(tabItems[activeTabItem] === 'Completed') {
            todoShowedItems = todoItems.filter((unit) => unit.completed === true);
        };
        if(tabItems[activeTabItem] === 'All') {
            todoShowedItems = todoItems;
        };

        let sortedItems: CardItemType[][] = [];
        let cardQuantity = 0;
        todoShowedItems?.map((item, index) => {
            if(index % 3 === 0) {
                sortedItems[cardQuantity] = [item];
                cardQuantity += 1;
            } else {
                sortedItems[cardQuantity - 1]?.push(item);
            }
        });
        setTodoSortedItems(sortedItems);
    }, [todoItems, activeTabItem]);

    return (
        <Box
            w='100%'
            h={`calc(455px + ${6 * (todoSortedItems.length || 1)}px)`}
            maxW='600px'
            m='50px auto 0'
            bg='lightPurple.50'
            p={`0 15px`}
            position='relative'
            sx={{
                perspective: '300px'
            }}
        >
            <Text
                textAlign='center'
                fontWeight={100}
                fontSize='110px'
                lineHeight='110px'
                color='lightPurple.100'
                p='10px 0'
            >todos</Text>
            {!todoSortedItems.length ? 
                <Card
                    setInputValueHandler={setInputValueHandler}
                    onAddTodoItemHandler={onAddTodoItemHandler}
                    inputValue={inputValue}
                    todoItemsLength={todoItems?.length}
                    onChangeTodoCompleteHandler={onChangeTodoCompleteHandler}
                    emptyCard={true}
                    priority={1}
                    tabItems={tabItems}
                    activeTabItem={activeTabItem}
                    onChooseTabHandler={onChooseTabHandler}
                    clearCompeledHandler={clearCompeledHandler}
                /> :
                <>
                    {todoSortedItems.map((item, index) => 
                        <Card
                            setInputValueHandler={setInputValueHandler}
                            onAddTodoItemHandler={onAddTodoItemHandler}
                            inputValue={inputValue}
                            todoItems={item}
                            todoItemsLength={todoItems?.length}
                            onChangeTodoCompleteHandler={onChangeTodoCompleteHandler}
                            key={index}
                            emptyCard={false}
                            priority={Math.abs(index - todoSortedItems.length)}
                            tabItems={tabItems}
                            activeTabItem={activeTabItem}
                            onChooseTabHandler={onChooseTabHandler}
                            clearCompeledHandler={clearCompeledHandler}
                        />
                    )}                
                </>
            }
        </Box>
    )
}

export default Main;