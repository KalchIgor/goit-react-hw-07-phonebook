import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./contacts-operation";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder =>{
     builder.addCase(fetchContacts.pending, (store) => {
      store.loading = true;
    });
  
    builder.addCase(fetchContacts.fulfilled, (store, {payload}) => {
        store.loading = false;
        store.items = payload;
    });
  
     builder.addCase(fetchContacts.rejected, (store, {payload}) => {
        store.loading = true;
        store.error = payload;
     });
    
        
     builder.addCase(addContact.pending, (store) => {
        store.loading = true;
     });
     builder.addCase(addContact.fulfilled, (store, {payload}) => {
        store.loading = false;
        store.items.push(payload);
     });
     builder.addCase(addContact.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
     });
        
        
    builder.addCase(removeContact.pending, (store) => {
             store.loading = true;
         });
    builder.addCase(removeContact.fulfilled, (store, {payload}) => {
        store.loading = false;
        store.items = store.items.filter(item => item.id !== payload);
         });
    builder.addCase(removeContact.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
    });
  
 /*   extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.loading = true;
        },
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchContacts.rejected]: (store, {payload}) => {
            store.loading = true;
            store.error = payload;
        },
        [addContact.pending]: (store) => {
            store.loading = true;
        },
        [addContact.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items.push(payload);
            console.log(payload);
            // store.items = [...store.items, payload]
        },
        [addContact.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [removeContact.pending]: (store) => {
            store.loading = true;
        },
        [removeContact.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = store.items.filter(item => item.id !== payload);
        },
        [removeContact.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
    }*/
 }
});

export default contactsSlice.reducer;
