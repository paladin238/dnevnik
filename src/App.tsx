import styles from './App.module.css'
import { Details } from './Details'
import { Details2 } from './students.1'
import {Scroll} from "./Scroll"
export function App(){
  
  return <div className={styles.layout3}>
  <div className={styles.layout}>  
<Details />
  </div>
  <div className={styles.layout2}>
  <Details2 />
  </div>
  <div className={styles.layout4}>
  <Scroll/>
  </div>
  </div>
 
}