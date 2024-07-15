export function GET() {
  return Response.json({
    name: "Prakashsingh",
    email: "prakash@gmail.com",
  });
}

export function POST() {
  return Response.json({
    message: "Post request accepted",
  });
}
