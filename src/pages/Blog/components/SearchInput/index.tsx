import { Posts, SearchInputContainer } from "./styles";

function SearchInput() {
  return (
    <SearchInputContainer>
      <Posts>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </Posts>

      <input type="text"  placeholder="Buscar conteúdo"/>
    </SearchInputContainer>
  );
}

export default SearchInput;
