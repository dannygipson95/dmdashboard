import styled from 'styled-components'

export const StyledMonsterCard= styled.div`
        border: 1px solid gainsboro;
        border-radius: 8px;
        width: 90%;
        margin: 1% 5%;

        h2{
            margin: 1%;
            font-weight: bold;
        }

        h4{
            margin: 1%;
        }

        form{
            display: flex;
            flex-direction: column;
            
            label{
                width: 30%;

                .damage{
                    border: 2px solid indianred;
                }

                .healing{
                    border: 2px solid lime;
                }
            }

            select{
                width: 50%;
                height: 10%;
                margin: 1% 0;
            }
        }
    `