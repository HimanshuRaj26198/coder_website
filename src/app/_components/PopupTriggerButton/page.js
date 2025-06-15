"use client"
const PopupTriggerButtin = ({ text, style }) => {
    const showPopup = () => {
        document.getElementById("popupContainer").style.display = "flex";
        document.getElementById("enrollmentPopup").style.display = "block";

    }
    return <>
        <span
            style={{ ...style }}
            onClick={showPopup}
            href="course-watch.html"
            className="flex items-center justify-center h-10 px-6 rounded-md bg-blue-600 text-white"
        >

            {text}
        </span>
    </>
}

export default PopupTriggerButtin;