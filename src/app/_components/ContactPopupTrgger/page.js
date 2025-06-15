"use client"
const ContactPopupTrigger = () => {

    const triggerContactPopu = () => {
        document.getElementById("contactPopup").style.display = "block";
        document.getElementById("popupContainer").style.display = "flex"
    }
    return <>

        <span
            onClick={triggerContactPopu}
            className="flex items-center justify-center h-10 px-6 rounded-md bg-gray-100"
        >
            Contact Us
        </span>
    </>
}

export default ContactPopupTrigger;