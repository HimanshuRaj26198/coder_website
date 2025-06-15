// "use client";

// import { useEffect, useState } from "react";

const CustomAccordion = ({ list = [] }) => {
    // Ensure list is always initialized as an array
    // const [listState, setListState] = useState(() =>
    //     list.map((item) => ({ ...item, hidden: false }))
    // );

    // const toggleListVisibility = (index) => {
    //     console.log("Called Function", index);

    //     // Create a new copy of the state array
    //     const newList = listState.map((item, i) =>
    //         i === index ? { ...item, hidden: !item.hidden } : item
    //     );

    //     console.log(newList, "Updated List");
    //     setListState(newList); // Update the state with a new reference
    // };

    // useEffect(() => {
    //     console.log("List State Updated: ", listState);
    // }, [listState]); // Dependency array to track state changes

    // if (!listState.length) {
    //     return <p>No items available to display.</p>;
    // }

    return (
        <div className="accordion" id="accordionExample">
            {list &&
                list.map((a, index) => {
                    const collapseId = `collapse-${index}`; // Unique ID for each item
                    return (
                        <div key={a.id} className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${collapseId}`}
                                    aria-expanded="true"
                                    aria-controls={collapseId}
                                >
                                    {a.topic || a.question}
                                </button>
                            </h2>
                            <div
                                id={collapseId}
                                className="accordion-collapse collapse show"
                            >
                                <div className="accordion-body">{a.details || a.answer}</div>
                            </div>
                        </div>
                    );
                })}
        </div>

    );
};

export default CustomAccordion;
