import _ from 'lodash';

const Pagination = ({ pages, url }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination w-max mx-auto">
                {pages.map(page =>
                    <li key={page} className={page.active == 1 ? "page-item active" : "page-item"}>
                        <a onClick={handleClick(page.url)} className="page-link cursor-pointer ">{page.label}</a>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Pagination;