import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection, getEntry } from "astro:content";

// Para output = 'hybrid' se debe configurar la siguiente variable
export const prerender = false;

export const GET: APIRoute = async ({params}) => {
  const {slug} = params;

  const post = await getEntry('blog', slug as any);

  if (!post) {
    return new Response(JSON.stringify({ msg: `Post ${slug} not found` }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// Para output = 'hybrid' se debe usar el siguiente código
// export const getStaticPaths: GetStaticPaths = async () => {
//   return [
//     {
//       params: {
//         slug: 'first-post'
//       }
//     }
//   ]
// }

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const PUT: APIRoute = async ({ params, request }) => {
  const { slug } = params;
  const body = await request.json();

  return new Response(
    JSON.stringify({
      Method: "PUT",
      Slug: slug,
      Body: body,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const { slug } = params;
  const body = await request.json();

  return new Response(
    JSON.stringify({
      Method: "PATCH",
      Slug: slug,
      Body: body,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const DELETE: APIRoute = async ({ params, request }) => {
  const { slug } = params;

  return new Response(
    JSON.stringify({
      Method: "DELETE",
      Slug: slug,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
