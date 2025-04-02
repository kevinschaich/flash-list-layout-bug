import { FlashList } from '@shopify/flash-list'
import * as React from 'react'
import { Button, LayoutAnimation, Text, TextInput, View } from 'react-native'
import { KeyboardAvoidingView, KeyboardStickyView } from 'react-native-keyboard-controller'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MOCK_MESSAGES, MockMessage } from '~/app/data'

export default function Chat() {
    const insets = useSafeAreaInsets()
    const [messages, setMessages] = React.useState(MOCK_MESSAGES)
    const flashListRef = React.useRef<FlashList<any>>(null)
    const [message, setMessage] = React.useState('')
    const ME = 'Alice'

    const addMessage = (newMessage: MockMessage) => {
        setMessages((prev) => [newMessage, ...prev])
        flashListRef.current?.prepareForLayoutAnimationRender()

        LayoutAnimation.configureNext({
            duration: 500,
            create: { type: 'linear', property: 'opacity' },
            update: { type: 'spring', springDamping: 10 },
            delete: { type: 'linear', property: 'opacity' },
        })
    }

    function sendMessage() {
        addMessage({
            attachments: [],
            id: Math.random().toString(),
            reactions: {},
            sender: ME,
            text: message,
            newlySent: true,
            date: new Date().toISOString().split('T')[0],
            time: new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            }),
        })
        setMessage('')
    }

    return (
        <>
            <KeyboardAvoidingView
                style={[
                    {
                        flex: 1,
                        minHeight: 2,
                        backgroundColor: '#fff',
                    },
                ]}
                behavior='padding'
            >
                <FlashList
                    inverted
                    ref={flashListRef}
                    keyExtractor={(item) => item.id}
                    estimatedItemSize={10}
                    data={messages}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                className='h-fit w-full justify-center px-2 pb-3.5 sm:px-4'
                                style={
                                    item.sender === ME
                                        ? {
                                              alignItems: 'flex-end',
                                          }
                                        : {
                                              alignItems: 'flex-start',
                                          }
                                }
                            >
                                <View className='rounded-2xl bg-popover px-3 py-1.5 dark:bg-muted-foreground'>
                                    <Text>{item.text}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </KeyboardAvoidingView>
            <KeyboardStickyView offset={{ opened: insets.bottom }}>
                <View className='w-full flex-row items-center gap-2 py-2 pb-8'>
                    <TextInput
                        placeholder='Message'
                        className='z-10 mr-4 flex-1 rounded-full border border-border bg-background px-4 py-2 text-lg leading-tight text-foreground sm:text-xl sm:leading-tight'
                        placeholderTextColor={'#333'}
                        multiline
                        onChangeText={setMessage}
                        value={message}
                    />
                    <Button onPress={sendMessage} title='send'></Button>
                </View>
            </KeyboardStickyView>
        </>
    )
}
