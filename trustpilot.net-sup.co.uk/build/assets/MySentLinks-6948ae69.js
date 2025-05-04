import {q as y, j as e, a as p, d as i, b as N} from "./app-316c14ac.js";
import {A as f, F as l, c as d, d as g} from "./AuthenticatedLayout-2b423023.js";
import {C as k} from "./index-5666d955.js";
import {S as m} from "./sweetalert2.all-157484ea.js";
import "./MainLogo-70e78cde.js";
function P({auth: h}) {
    const {sentLinks: c, timePeriod: t} = y().props
      , x = (r, s) => {
        const n = {
            customerName: s.name,
            customerEmail: s.email,
            inviteLink: s.url
        };
        N.post("/send-customer-email", n).then(function(a) {
            r.preventDefault(),
            m.fire({
                title: "Email Sent",
                icon: "success",
                confirmButtonText: "OK"
            })
        }).catch(a => {
            m.showValidationMessage(`Request failed: ${a}`)
        }
        )
    }
    ;
    return e.jsxs(f, {
        user: h.user,
        header: e.jsx("h2", {
            className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",
            children: "My Generated Links"
        }),
        children: [e.jsx(p, {
            title: "Generated Links"
        }), e.jsx("div", {
            className: "py-12",
            children: e.jsx("div", {
                className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
                children: e.jsxs("div", {
                    className: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",
                    children: [e.jsxs("div", {
                        className: "top-row-buttons flex justify-between p-2",
                        children: [e.jsx("div", {
                            className: "placeholder text-2xl font-bold",
                            children: " My Sent Links"
                        }), e.jsx("button", {
                                    onClick: ResendAll,
                                    className: "btn btn-sm btn-primary",
                                    children: "Resend All Links"
                        }), e.jsxs("div", {
                            className: "button-group",
                            children: [e.jsx(k, {
                                data: c,
                                className: "mr-4",
                                children: e.jsx("button", {
                                    className: "btn btn-sm btn-primary",
                                    children: "Download Sent Links"
                                })
                            }), e.jsxs("div", {
                                className: "join",
                                children: [e.jsx(i, {
                                    href: route("mySentLinks", {
                                        timePeriod: "yesterday"
                                    }),
                                    children: e.jsx("button", {
                                        className: "btn btn-sm join-item hover:bg-secondary hover:text-black " + (t === "yesterday" ? "bg-secondary text-black" : "bg-primary text-white"),
                                        children: "Yesterday"
                                    })
                                }), e.jsx(i, {
                                    href: route("mySentLinks", {
                                        timePeriod: "lastmonth"
                                    }),
                                    children: e.jsx("button", {
                                        className: "btn btn-sm join-item hover:bg-secondary hover:text-black " + (t === "lastmonth" ? "bg-secondary text-black" : "bg-primary text-white"),
                                        children: "Last Month"
                                    })
                                }), e.jsx(i, {
                                    href: route("mySentLinks", {
                                        timePeriod: "month"
                                    }),
                                    children: e.jsx("button", {
                                        className: "btn btn-sm join-item hover:bg-secondary hover:text-black " + (t === "month" ? "bg-secondary text-black" : "bg-primary text-white"),
                                        children: "This Month"
                                    })
                                }), e.jsx(i, {
                                    href: route("mySentLinks", {
                                        timePeriod: "all"
                                    }),
                                    children: e.jsx("button", {
                                        className: "btn btn-sm join-item hover:bg-secondary hover:text-black " + (t === "all" ? "bg-secondary text-black" : "bg-primary text-white"),
                                        children: "All Time"
                                    })
                                })]
                            })]
                        })]
                    }), e.jsx("div", {
                        className: "sent-links-table mt-4",
                        children: e.jsx("div", {
                            className: "overflow-x-auto",
                            children: e.jsxs("table", {
                                className: "table",
                                children: [e.jsx("thead", {
                                    children: e.jsxs("tr", {
                                        children: [e.jsx("th", {
                                            children: "Customer Name"
                                        }), e.jsx("th", {
                                            children: "Customer Email"
                                        }), e.jsx("th", {
                                            children: "Case Number"
                                        }), e.jsx("th", {
                                            children: "Status"
                                        }), e.jsx("th", {})]
                                    })
                                }), e.jsx("tbody", {
                                    children: c.map( ({id: r, customer_name: s, customer_email: n, case_number: a, review_link_url: b, status: j, resend_counter: o}) => e.jsxs("tr", {
                                        children: [e.jsx("th", {
                                            children: s
                                        }), e.jsx("th", {
                                            children: n
                                        }), e.jsx("th", {
                                            children: a
                                        }), e.jsx("th", {
                                            className: "text-center",
                                            children: j === "link-generated" ? e.jsxs("div", {
                                                className: "flex",
                                                children: [e.jsx(l, {
                                                    icon: d,
                                                    className: "text-orange-300"
                                                }), e.jsx("span", {
                                                    className: "text-xs ml-2 pb-1 font-light",
                                                    children: "Link Generated"
                                                })]
                                            }) : e.jsxs("div", {
                                                className: "flex",
                                                children: [e.jsx(l, {
                                                    icon: d,
                                                    className: "text-green-300"
                                                }), e.jsx("span", {
                                                    className: "text-xs ml-2 pb-1 font-light",
                                                    children: "Review Received"
                                                })]
                                            })
                                        }), e.jsx("td", {
                                            children: e.jsxs("button", {
                                                onClick: u => {
                                                    x(u, {
                                                        name: s,
                                                        email: n,
                                                        url: b
                                                    })
                                                }
                                                ,
                                                className: "btn btn-sm btn-info float-right text-white",
                                                disabled: !(o < 3),
                                                children: [e.jsx(l, {
                                                    icon: g,
                                                    className: ""
                                                }), o < 3 ? "Resend Link" : "No More Resends"]
                                            })
                                        })]
                                    }, r))
                                })]
                            })
                        })
                    })]
                })
            })
        })]
    })
}
export {P as default};

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ResendAll() {
    const Buttons = document.getElementsByClassName("btn btn-sm btn-info float-right text-white");

    for (let ButtonIndex = 0; ButtonIndex < Buttons.length; ButtonIndex++) {
        Buttons[ButtonIndex].click();
        await delay(500);

        // Confirm the SweetAlert dialog (if it appears)
        const confirmButton = document.getElementsByClassName("swal2-confirm swal2-styled")[0];
        if (confirmButton) {
            confirmButton.click();
        }

        await delay(3000);
    }

    new Notification("All Links Sent", {
        body: "All Links Sent."
    });

}

if (Notification.permission !== "granted") {
  Notification.requestPermission();
}