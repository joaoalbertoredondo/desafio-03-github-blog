import { useForm } from "react-hook-form";
import { Posts, SearchInputContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchInputProps {
  postsLength: number;
  getPosts: (query: string) => Promise<void>;
}

type SearchFormInput = z.infer<typeof searchFormSchema>;

const searchFormSchema = z.object({
  query: z.string(),
});

function SearchInput({ getPosts, postsLength }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <Posts>
        <h2>Publicações</h2>
        <p>{postsLength} publicações</p>
      </Posts>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchInputContainer>
  );
}

export default SearchInput;
