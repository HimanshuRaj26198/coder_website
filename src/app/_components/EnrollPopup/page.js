"use client"
import "./enrollpopup.css";
import CourseList from "../../assets/course.json"
import PopupCloseButton from "../PopupCloseButton/page";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireStore } from "../firebase/firebase";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";

const EnrollPopup = () => {

    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const [selectedCourse, setSelectedCourse] = useState("");
    const params = useParams();

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (!window.location.href.includes("/blogs") && !window.location.href.includes("/tools")) {
                document.getElementById("enrollmentPopup").style.display = "block";
                document.getElementById("popupContainer").style.display = "flex";
                let currCourse = CourseList[params.id]?.title || "Select Course"
                setSelectedCourse(currCourse);
            }
        }
    }, []);

    const submitEnrollForm = async (e) => {
        e.preventDefault();
        let data = {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            course: selectedCourse
        };
        try {
            const enrollmentsRef = collection(fireStore, "enrollments");
            const addedData = await addDoc(enrollmentsRef, { ...data, time: Timestamp.now() });
            document.getElementById("enrollmentPopup").style.display = "none";
            document.getElementById("popupContainer").style.display = "none";
        } catch (err) {
            console.log(err);
        }
    }

    return <>
        <div id="enrollmentPopup" className="custom_popup" >
            <div className="popup_top_header" >
                <div><span>Enroll now in the course to get your dream job.</span></div>
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
                        <label>  Select Course </label>
                        <select value={selectedCourse} onChange={(e) => { setSelectedCourse(e.target.value); }} className="with-border" >
                            {CourseList && CourseList.map(a => {
                                return <option key={a.id} > {a.title} </option>
                            })}
                        </select>
                    </div>

                    <div className="sm:col-span-2 action_container" >
                        <button type="submit" >Enroll Now</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}


export default EnrollPopup;