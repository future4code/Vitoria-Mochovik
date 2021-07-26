import {CardPostContainer, ImgFlecha, CardVote, CardName, CardAction, 
    CardInformation, CardDescription, ImgIcone} from './styled'

    import ImageIcone from '../../assets/logo2.png'
    import ImageFlechaBaixo from '../../assets/flecha-baixo.png'
    import ImageFlechaCima from '../../assets/flecha-cima.png'
    import ImageComentario from '../../assets/comentario.png'
    import ImageSalvar from '../../assets/salvar.png'
    import ImageCompartilhar from '../../assets/flecha-compartilhar.png'
    import ImagemBaixoPreenchida from '../../assets/flecha-baixo-preenchida.png'
    import ImagemCimaPreenchida from '../../assets/flecha-cima-preenchida.png'
    
    

export const CardPost = ({
    post, changeImageBaixo, changeImageCima, onClickVote, onClickCard
})=>{
    return(
        <CardPostContainer key={post.id} >
            <CardVote>
                <ImgFlecha src={changeImageCima(post.userVote)} onClick={() => onClickVote(post.userVote, 1, post.id)}/>
                { post.voteSum === null ? 
                    <p> <b> 0 </b></p>
                : <p> <b> {post.voteSum} </b></p>}
                <ImgFlecha src={changeImageBaixo(post.userVote)}  onClick={() => onClickVote(post.userVote, -1, post.id)}/>
            </CardVote>
            <CardInformation> 
                <div onClick={() =>onClickCard(post)}>
                    <CardName>
                        <p> {post.username} </p>
                        {/* <p> {post.createdAt} </p> */}
                    </CardName>
                    <CardDescription> 
                        <h3 > {post.title}</h3>
                        <p> {post.body} </p>
                    </CardDescription>
                </div>
                <CardAction>
                    <ImgIcone src={ImageComentario} />
                    { post.commentCount === null && <p> 0 Comentários</p> }
                    { post.commentCount === "1" && <p> {post.commentCount} Comentário </p>}
                    { post.commentCount > 1 && <p> {post.commentCount} Comentários </p>}
                    <ImgIcone src={ImageCompartilhar} />
                    <p> Compartilhar</p>
                    <ImgIcone src={ImageSalvar} />
                    
                </CardAction>
            </CardInformation>
            {/* <p onClick={() => onClickVote(post.userVote, 1, post.id)}> &#128316;</p>
            <p onClick={() => onClickVote(post.userVote, -1, post.id)}>&#128317;</p> */}
        </CardPostContainer>
    )
}