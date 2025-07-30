import './styles.css'
import {useRef, useState} from "react";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0)
    const ref = useRef(0)


    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                title="关于"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                阿拉木图人口约200万，是哈萨克斯坦最大的城市。在1929年至1997年之间，它是该国首都。
            </Panel>

            <Panel
                title="词源"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                这个名字源于哈萨克语 <span lang="kk-KZ">алма</span>，是“苹果”的意思，通常被翻译成“满是苹果”。事实上，阿拉木图周围的地区被认为是苹果的祖籍，<i
                lang="la">Malus sieversii</i> 被认为是目前本土苹果的祖先。
            </Panel>
        </>
    );
}


function Panel({
                   title,
                   children,
                   isActive,
                   onShow
               }) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                    <p>{children}</p>
                )
                : (
                    <button onClick={onShow}>
                        显示
                    </button>
                )}
        </section>
    );
}
