import { createClient } from "contentful";
import { useState } from "react";
import { useEffect } from "react";

const client = createClient({
    space: `${import.meta.env.VITE_SPACE_ID}`,
    environment: "master",
    accessToken: `${import.meta.env.VITE_CONTENT_DELEVREY_API_ACCESS_TOKEN}`,
});

export const useFetchProjects = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const fetchData = async () => {
        try {
            const response = await client.getEntries({
                content_type: "projects",
            });
            const getData = response.items.map((item) => {
                const { title, url } = item.fields;
                const id = item.sys.id;
                const img = item.fields?.image?.fields?.file?.url;
                return { id, url, title, img };
            });
            setProjects(getData);
            setIsLoading(false);
        } catch (error) {
            console.log(console.error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return { isLoading, projects };
};
