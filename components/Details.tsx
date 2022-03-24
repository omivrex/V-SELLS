import Image from "next/image";
import styles from '../styles/details.module.css'
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from "react-icons";

const Details = ({displayValue, onclick}:any) => {
    return ( 
        <div style={displayValue} id='cover' className={styles.cover}>
            <div id="detailsWrapper" className={styles.detailsWrapper}>
                <div className={styles.closeCover}>
                    <IconContext.Provider value={{ className: styles.close, size: '2.4rem' }}>
                        <AiOutlineClose onClick={()=> {
                            const detailsWrapper:any = document.getElementById('detailsWrapper')
                            detailsWrapper.style.animation = 'backOutUp 0.3s forwards'
                            setTimeout(() => {
                                onclick()
                                detailsWrapper.style.animation = 'backInDown 0.3s forwards'
                            }, 300);
                        }} />
                    </IconContext.Provider>
                </div>
                <div className={styles.imgAndPriceWrapper}>
                    <div className={styles.productImg}>
                        <Image height={250} width={250} src="/product.jpg"/>
                    </div>
                    <div className={styles.productFullName}>
                        Skechers Unisex-Child Mega-Surge Sneaker
                        <div className={styles.price}>$190</div>
                    </div>
                    <div className={styles.buyButn}>
                        BUY
                    </div>
                </div>
                <div className={styles.details}>
                    <span className={styles.detailsHeader}>Details</span>
                    <p>
                        Labore ex dolore ut esse eiusmod deserunt pariatur nulla est proident. Sunt enim duis labore tempor sint consectetur aliqua fugiat veniam velit. Aliquip cillum non occaecat aliqua culpa ut ipsum aute labore.
                        Nisi duis sit ex nostrud. Aute est aliquip excepteur Lorem consectetur irure ut minim dolor labore irure ullamco. Occaecat aliquip esse irure commodo esse aliquip minim dolore esse adipisicing magna in excepteur nisi.
                        Cupidatat Lorem nisi voluptate non deserunt. Duis et non consequat velit incididunt labore enim nulla aute cupidatat est elit exercitation. Nisi sit ad qui consequat.
                        Ex culpa deserunt nisi nulla consequat nulla irure laborum fugiat. Esse non quis velit magna sit esse do officia cupidatat pariatur. Consectetur aute ad in exercitation ullamco amet irure duis. Duis pariatur Lorem mollit et. Cillum consequat mollit pariatur enim ullamco eiusmod exercitation nulla culpa. Consectetur nostrud ex incididunt ex laboris.
                        Adipisicing duis cupidatat aliqua ullamco ullamco sunt exercitation mollit eiusmod sint. Incididunt ut Lorem nisi nisi. In ea exercitation exercitation anim fugiat nisi dolore esse laborum sunt magna aliqua aliquip. Sint aute sit consectetur cillum culpa veniam officia exercitation dolore esse ut. Eu incididunt ad sit amet elit incididunt. Officia incididunt elit amet proident est. Laborum labore enim reprehenderit eiusmod laborum qui tempor.
                        Minim est nostrud velit sit ea occaecat consequat proident ea exercitation proident pariatur. Commodo exercitation fugiat culpa esse nostrud minim adipisicing eu. Sit ad ut deserunt enim nulla cupidatat ad do. Id ullamco adipisicing officia veniam. Nostrud sunt fugiat dolore ut adipisicing pariatur sunt anim elit cillum aute consequat sunt.
                    </p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Details;