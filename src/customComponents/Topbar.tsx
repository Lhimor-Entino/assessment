import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Topbar = (props: Props) => {
  return (
    <div>
        <ul>
            <li>
                <Link to={"new"}>New</Link>
            </li>
        </ul>
    </div>
  )
}

export default Topbar