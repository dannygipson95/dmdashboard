import styled from 'styled-components'

const StyledContainer = styled.div`
    background: #FCE5CD;
    margin: 0;
    border: 5px solid #B08400;
    border-width: 5px 0;
    width: 100%;

    h2{
        margin: 3% 0;
        font-size: 2.5rem;
        text-align: center;
        color: #660000;
        font-family: 'Times New Roman', Times, serif;
        border-bottom: 3px solid #990000; 
    }

    form{
        margin: 0 10%;
        width: 80%;
        display: flex;
        flex-direction: column;

        input{
            width: 60%;
            margin: 3% 20%;
            text-align: center;
            border: 2px solid #660000;
            background: #D7DBCD;
            color: #7E2E27;

            ::placeholder{
                color: #7E2E27;
                opacity: .6;
            }
        }
        

        button{
            width: 30%;
            margin: 3% 35%;
            border: 2px solid #990000;
            background: #990000;
            color: #D7DBCD;

            &:hover{
                cursor: pointer;
            }
        }
    }

    .init{
        border-top: 2px double #990000;
    }

    h4{
        color: #660000;
        width: 100%;
        font-size: 1.6rem;
        text-align: center;
        
        padding-bottom: 1%;
        margin: 1% 0;
    }
`

export default StyledContainer;