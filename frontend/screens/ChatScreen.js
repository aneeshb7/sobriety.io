import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import controller from '../controller';
import uuid from 'react-native-uuid';


export default function ChatScreen() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: uuid.v4(),
                text: 'Hello my name is Max. How can I help you today?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://media.istockphoto.com/id/1191411962/vector/cute-robot.jpg?s=612x612&w=0&k=20&c=KelCNJMam1XGwVM0HclQtHIHZxByJZOtnRjkBbHrAKw=',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        controller.getChatBotResponse(messages[0].text).then((response) => {
            messages.unshift({
                _id: uuid.v4(),
                text: response ? response : 'Sorry, I do not understand your question. Please try again.',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://media.istockphoto.com/id/1191411962/vector/cute-robot.jpg?s=612x612&w=0&k=20&c=KelCNJMam1XGwVM0HclQtHIHZxByJZOtnRjkBbHrAKw=',
                },
            });
            setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        })
    }, [])

    return (
        <View style={{flex: 1}}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    )
}


