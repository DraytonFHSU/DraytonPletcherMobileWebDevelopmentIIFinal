import {useState, useEffect, createContext} from "react";
import { addDoc, collection, deleteDoc, doc, getDocs, limit, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase"

const TransactionContext = createContext();

export const TransactionProvider = ({ children}) => {
    const [transactionList, setTransactionList] = useState([]);
    const [transactionEdit, setTransactionEdit] = useState({
        transaction: {},
        edit: false,
    });

    useEffect(() =>{
        const fetchTransaction = async () => {
            try {
                const transactionListRef = collection(db, "transactionList");
                const q = query(transactionListRef, orderBy("title"), limit(10));
                const querySnapshot = await getDocs(q);
                const transactionList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }));
                setTransactionList(transactionList);
            } catch (err) {
                console.log(err)
            }
        };
        fetchTransaction();
    }, [])

    // Add Transaction
    const addTransaction = async (newTransaction) => {
        try {
            const docRef = await addDoc(collection(db, "transactionList"), newTransaction);
            console.log("Document written with ID: ", docRef.id);
            setTransactionList((preTransactionList) => [
                ...preTransactionList,
                {id: docRef.id, data: newTransaction},
            ])
        } catch (err) {
            console.log(err)
        }
    }

    //Edit Transaction
    const editTransaction = (transaction) => {
        setTransactionEdit({transaction, edit: true});
    };

    //Update Transaction
    const updateTransaction = async (id, updTransaction) => {
        try {
            const docRef = doc(db, "transactionList", id);
                await updateDoc(docRef, updTransaction);
                const updateTransactionList = transactionList.map((transaction) => {
                    if(transaction.id === id){
                        return {
                            id,
                            data: {
                                ...transaction.data,
                                ...updTransaction,
                            }
                        }
                    }
                });
                setTransactionList(updateTransactionList);
            } catch (err) {
            console.log(err)
            }
    }
        // Delete Transaction
        const deleteTransaction = async(id) => {
            Alert.alert("Delete Transaction", "Are you sure you want to delete this transaction?", [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: () => {
                        try {
                            const docRef = doc(db, "transactionList", id);
                            deleteDoc(docRef);
                            setTransactionList((preTransactionList) => 
                                preTransactionList.filter((transaction) => transaction.id !== id)
                        );
                        } catch (err) {
                            console.log(err)
                        }
                    }
                },
            ])
            // if(window.confirm("Are you sure you want to delete?")) {
            //     try {
            //         const docRef = doc(db, "transactionList", id);
            //         await deleteDoc(docRef)
            //         setTransactionList(transactionList);
            //     } catch (err) {
            //         console.log(err)
            //     }
            // }
        }

    return (
        <TransactionContext.Provider
            value={{transactionList, addTransaction, editTransaction, updateTransaction, deleteTransaction, transactionEdit}}
        >
            {children}
        </TransactionContext.Provider>

        
    )
}

export default TransactionContext