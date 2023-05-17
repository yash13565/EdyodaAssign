import React, { useState } from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { AiOutlineClockCircle } from "react-icons/ai"
import frame from "../../Frame.png"
import style from "./Payment.module.css";
function Payment() {
    const plans = [
        { name: '12 months Subscription', price: 99, discount: 8, disable: true },
        { name: '12 months Subscription', price: 179, discount: 15, disable: false },
        { name: '6 months Subscription', price: 149, discount: 25, disable: false },
        { name: '3 months Subscription', price: 99, discount: 33, disable: false }
    ];
    const [selectedPlan, setSelectedPlan] = useState(0);
    const handlePlanChange = (id) => {
        setSelectedPlan(id);
     
    };
    return (
        <div className={style.payment} >
            <div className={style.top}>

                <div className={style.signup}>
                    <span className={style.icon}>  1</span>
                    <p>SignUp</p>
                </div>
                <div className={style.subscribe}>
                    <span className={style.icon}> 2</span>
                    <p>Subscribe</p>
                </div>
            </div>
            <p className={style.para}>Select Your subscription plan</p>
            <div className={style.plan}>
                {plans.map((plan,i) => (
                    <div className={`${style.planBlock} ${selectedPlan === i ? style.selectedPlan : ''}`}  >
                        <div className={style.checkbox}>
                            <input
                                type="radio"
                                value={plan.name}
                                //   checked={selectedPlan === plan}
                                onChange={() => handlePlanChange(i)}
                                name='name'

                            />
                            <label htmlFor='name'>{plan.name}</label>
                        </div>
                        <div className={style.pricing}>
                            <span className={style.total}> Total <FaRupeeSign /> {plan.price}</span>
                            <span className={style.monthly}> <FaRupeeSign /> {plan.discount}/mo</span>
                        </div>
                    </div>

                ))}
                <hr />
                <div className={style.sub}>
                    <span>subscription Fee </span><span className={style.rIcon}> <FaRupeeSign /> 18,500</span>
                </div>
                <div className={style.subscribeBlock}>
                    <div className={style.limited}>
                        <span>Limited time Offer</span>
                        <span> <AiOutlineClockCircle /> Offer Validate till 25th march 2023 </span></div>
                    <span> - <FaRupeeSign /> 18,401</span>
                </div>
                <div className={style.sub}>
                    <span>Total(inc. of 18% GST)</span><span className={style.rIcon}><FaRupeeSign /> {plans[selectedPlan].price} </span>
                </div>
                <div className={style.btnDiv}>
                    <button className={style.cancel}>CANCEL</button>
                    <button className={style.proceed}>PROCEED TO PAY</button></div>
                    <img src={frame}  width="32%" alt='my.jpeg'/>
            </div>
        </div>


    )
}

export default Payment
