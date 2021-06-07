import React from 'react';
import styled from 'styled-components'
import CreatePost from './components/createPost/CreatePost';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  
  state = {
      posts: [
        {
          nomeUsuario: 'paulinha',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/200/150'
        },
        {
          nomeUsuario: 'aninha',
          fotoUsuario: 'http://lorempixel.com/50/50/people',
          fotoPost: 'http://lorempixel.com/200/150/food'
        },
        {
          nomeUsuario: 'laurinha',
          fotoUsuario: 'https://picsum.photos/50/53',
          fotoPost: 'http://lorempixel.com/200/150/animals'
        }
      ]
    }

    adicionarNovoPost = (novoPost) => {
      const copiaPost = [...this.state.posts]
      copiaPost.push(novoPost)
      this.setState({posts: copiaPost})
    }
  render() {
     
    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })
    return (
      <MainContainer>
        <CreatePost
          adicionarNovoPost={this.adicionarNovoPost}
        />
        {listaPosts}
      </MainContainer>
      
    );
  }
}

export default App;
