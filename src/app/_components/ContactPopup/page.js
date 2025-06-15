"use client"
import PopupCloseButton from "../PopupCloseButton/page";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireStore } from "../firebase/firebase";
import { useRef, useState } from "react";
import "./contactpupup.css";

const ContactPopup = () => {
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const queryRef = useRef(null);

    const submitEnrollForm = async (e) => {
        e.preventDefault();
        let data = {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            message: queryRef.current.value
        };
        try {
            const enrollmentsRef = collection(fireStore, "query");
            const addedData = await addDoc(enrollmentsRef, { ...data, time: Timestamp.now() });
            document.getElementById("contactPopup").style.display = "none";
            document.getElementById("popupContainer").style.display = "none";
        } catch (err) {
            console.log(err);
        }
    }
    return <>
        <div id="contactPopup" className="custom_popup" >
            <div className="popup_top_header" >
                <div><span>Connect our career consultant.</span></div>
                <div> <PopupCloseButton /> </div>
            </div>
            <div className="lg:p-8 p-5 form_container" bis_skin_checked={1}>
                <form onSubmit={submitEnrollForm} className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mt-4">
                    <div>
                        <label htmlFor="checkout-fn" className="text-sm font-medium">First Name</label>
                        <input type="text" ref={firstnameRef} className="with-border" id="checkout-fn" />
                    </div>
                    <div>
                        <label htmlFor="checkout-ln" className="text-sm font-medium">Last Name</label>
                        <input type="text" ref={lastnameRef} className="with-border" id="checkout-ln" />
                    </div>
                    <div>
                        <label htmlFor="checkout-email" className="text-sm font-medium">E-mail Address</label>
                        <input type="text" ref={emailRef} className="with-border" id="checkout-email" />
                    </div>
                    <div>
                        <label htmlFor="checkout-phone" className="text-sm font-medium">Phone Number</label>
                        <input type="text" ref={phoneRef} className="with-border" id="checkout-phone" />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="checkout-query" className="text-sm font-medium">Query</label>
                        <textarea ref={queryRef} className="with-border w-full" id="checkout-query"></textarea>
                    </div>

                    <div className="sm:col-span-2 action_container" >
                        <button type="submit" >Enroll Now</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default ContactPopup;