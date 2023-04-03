import Link from "next/link";
import { useRouter } from "next/router";


const style_selected ={
    color:'#0070f3',
    textDecoration: 'underline'
}

const style_normal ={
    color:'white'
}

export const ActiveLink = (props: { href: string ; text: string }) => {

const {asPath} = useRouter();

  return (
    <Link style={asPath===props.href ? style_selected: style_normal} href={props.href}>
        {props.text}
    </Link>
  )
}
