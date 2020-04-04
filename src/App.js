//react
import React, { Component } from 'react';
//components
import Header from "./components/Header"
import SearchBox from "./components/SearchBox"
import UserDiv from "./components/UserDiv"
import FieldsDiv from './components/FieldsDiv';

//axios get call to random users api
import { getUsers } from "./API"

// console.log(getUsers())

jawn()

async function jawn() {

  // const { data } = await getUsers()


}

class App extends Component {

  state = {
    users: [],
    sortOrder: "asc",
    textValue: ""
  }

  async componentDidMount() {

    const { data } = await getUsers()


    const users = data.results.map(segment => {
      return {
        id: segment.login.uuid,
        first: segment.name.first,
        last: segment.name.last,
        name: `${segment.name.first} ${segment.name.last}`,
        phone: segment.phone,
        dob: this.convertDate(segment.dob.date),
        image: segment.picture.large,
        email: segment.email
      }
    })

    this.setState({ users: users })
  }

  convertDate = date => {

    let str = ""

    if (date.charAt(5) === "0") {
      str += date.substring(6, 8)
      if (date.charAt(8) === "0") {
        str += date.substring(9, 10)
      } else {
        str += date.substring(8, 10)
      }
    }
    else {
      str += date.substring(5, 7)
      if (date.charAt(8) === "0") {
        str += date.substring(8, 9)
      } else {
        str += date.substring(8, 9)
      }
    }
    str += `-${date.substring(0, 4)}`

    return str
  }

  sortName = () => {

    this.state.sortOrder === "dec" ? this.setState({ sortOrder: "asc" }) : this.setState({ sortOrder: "dec" })

    const namesUnsorted = this.state.users.map(user => user.name)
    if (this.state.sortOrder === "asc") {

      const namesSorted = namesUnsorted.sort()
      this.setState({ users: this.sort(namesSorted) })
    } else if (this.state.sortOrder === "dec") {

      const namesSorted = namesUnsorted.reverse()
      this.setState({ users: this.sort(namesSorted) })
    }
  }

  sort = order => {
    const orderedIndices = []
    let it = 0
    for (let i = 0; i < order.length;) {

      if (this.state.users[i].name === order[it]) {
        orderedIndices.push(i)
        it++
        if (it === order.length) i = 8
      } else {
        i < order.length - 1 ? i++ : i = 0
      }
    }
    const sorted = []

    for (const index of orderedIndices) sorted.push(this.state.users[index])

    return sorted
  }

  filterNames = e => {

    console.log(e.target.value)
    this.setState({ textValue: e.target.value })
    const filteredArray = []
    // for(const e of this.state.users) filteredArray.push(   )
    // this.setState({ users: this.state.users.map(user => ) })
  }

  render = () => {
    return <>
      <Header />
      <main>
        <SearchBox textValue={this.state.textValue} filterNames={this.filterNames} />
        <FieldsDiv sortName={this.sortName} />

        {this.state.users.map(user =>
          <UserDiv key={user.id} name={user.name} image={user.image}
            phone={user.phone} email={user.email} dob={user.dob} />
        )}
      </main>
    </>

  }
}

export default App