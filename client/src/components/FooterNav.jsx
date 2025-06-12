function FooterNav({ title, items }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        {items.map(item => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterNav;
