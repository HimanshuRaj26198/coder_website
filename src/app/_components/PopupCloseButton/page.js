"use client"
const PopupCloseButton = () => {
    const hidePopup = () => {
        document.getElementById("popupContainer").style.display = "none";
        if (document.getElementById("enrollmentPopup").style.display !== "none") {
            document.getElementById("enrollmentPopup").style.display = "none";
        } else if (document.getElementById("contactPopup").style.display !== "none") {
            document.getElementById("contactPopup").style.display = "none";
        }

    }
    return <>
        <span onClick={hidePopup}  > <img src="/assets/images/icons/close.png" width={30} height={30} /> </span>
    </>
}

export default PopupCloseButton;