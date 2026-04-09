import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, Terminal, Shield, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatAgen = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const newSocket = new WebSocket(`${protocol}//127.0.0.1:8000/ws/chat/`);

        newSocket.onopen = () => {
            console.log('WebSocket connected');
            setIsConnected(true);
        };

        newSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // Only add if it's from another user (since we add our own messages immediately)
            if (data.sender !== 'me') {
                setMessages(prevMessages => [...prevMessages, {
                    text: data.message,
                    sender: 'other',
                    timestamp: new Date(data.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
            }
        };

        newSocket.onclose = () => {
            console.log('WebSocket disconnected');
            setIsConnected(false);
        };

        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (socket && message.trim()) {
            socket.send(JSON.stringify({ 
                'message': message,
                'sender': 'me' 
            }));
            setMessages(prev => [...prev, {
                text: message,
                sender: 'me',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
            setMessage('');
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col pt-20">
            <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col bg-slate-800/50 backdrop-blur-md rounded-t-2xl border-x border-t border-slate-700 overflow-hidden shadow-2xl">
                
                {/* Chat Header */}
                <div className="p-4 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                <Cpu size={20} className="text-white" />
                            </div>
                            <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-800 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">Siteforce Real-time Hub</h2>
                            <p className="text-xs text-slate-400">{isConnected ? 'Online & Connected' : 'Connecting...'}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-slate-400">
                        <Shield size={18} className="hover:text-blue-400 cursor-pointer transition-colors" />
                        <Terminal size={18} className="hover:text-blue-400 cursor-pointer transition-colors" />
                    </div>
                </div>

                {/* Messages Area */}
                <div 
                    ref={scrollRef}
                    className="flex-1 p-6 overflow-y-auto space-y-6 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
                >
                    {messages.length === 0 && (
                        <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
                            <div className="p-4 rounded-full bg-slate-800/50 border border-slate-700">
                                <Bot size={48} className="animate-pulse" />
                            </div>
                            <p className="text-sm font-medium">No messages yet. Start the conversation!</p>
                        </div>
                    )}
                    
                    <AnimatePresence initial={false}>
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`flex flex-col max-w-[80%] ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                                    <div className={`flex items-center gap-2 mb-1 px-1`}>
                                        <span className="text-[10px] text-slate-500 font-mono">{msg.timestamp}</span>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            {msg.sender === 'me' ? 'You' : 'Guest'}
                                        </span>
                                    </div>
                                    <div className={`px-4 py-2.5 rounded-2xl shadow-sm text-sm leading-relaxed ${
                                        msg.sender === 'me' 
                                            ? 'bg-blue-600 text-white rounded-tr-none border border-blue-500' 
                                            : 'bg-slate-700 text-slate-100 rounded-tl-none border border-slate-600'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Input Area */}
                <form 
                    onSubmit={sendMessage}
                    className="p-4 bg-slate-800 border-t border-slate-700"
                >
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message securely..."
                            className="w-full bg-slate-900 border border-slate-700 text-slate-100 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
                        />
                        <button 
                            type="submit"
                            disabled={!message.trim() || !isConnected}
                            className="absolute right-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-900/20"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                    <p className="mt-2 text-[10px] text-center text-slate-500 uppercase tracking-widest font-medium">
                        End-to-end encrypted session • Siteforce Consulting Pvt Ltd
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ChatAgen;
