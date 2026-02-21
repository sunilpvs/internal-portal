function PageHeader({ title }) {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      <p>Home / {title}</p>
    </div>
  );
}

export default PageHeader;
