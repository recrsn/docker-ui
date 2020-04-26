import styled from 'styled-components';

const ListItem = styled.li`
    padding: 1rem 0;

    &:not(:last-child) {
        border-bottom: 1px solid #333;
    }
`

export default ListItem;
