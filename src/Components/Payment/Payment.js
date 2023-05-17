import React from 'react'
import { TbCircleNumber1 } from 'react-icons/tb'
import { TbCircleNumber2 } from 'react-icons/tb'
import { FaRupeeSign } from 'react-icons/fa'
import style from "./Payment.module.css"
function Payment() {
    const plans = [
        { name: '12 months Subscription', price: 10, discount: 0 },
        { name: '12 months Subscription', price: 10, discount: 0 },
        { name: '6 months Subscription', price: 10, discount: 0 },
        { name: '3 months Subscription', price: 10, discount: 0 }
    ];
    return (
        <div className={style.payment}>
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
            <p>Select Your subscription plan</p>
            <div className={style.plan}>
                {plans.map((plan) => (
                    <div className={style.planBlock}>
                        <div className={style.checkbox}>
                            <input
                                type="radio"
                                value={plan.name}
                                //   checked={selectedPlan === plan}
                                //   onChange={() => handlePlanChange(plan)}
                                name={plan.name}
                                
                            />
                            <label htmlFor={plan.name}>{plan.name}</label>
                        </div>
                        <div className={style.pricing}>
                            Total
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Payment
