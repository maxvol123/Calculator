interface Props{
    value:any
    click:()=>void
}

export function Button({value, click}:Props) {
    const getStyleName= (btn:string)=> {
        const className={
        '=':"Green",
        '*':"Orange",
        '-':"Orange",
        '+':"Orange",
        '/':"Orange",
        'C':'Red'
    }
    return className[btn as keyof typeof className]
    }
    return(
        <button className={`bg-slate-200 m-1 rounded ${getStyleName(value)}`} onClick={click}>{value}</button>
    )
}