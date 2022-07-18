import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export default function LoadingGrid({ count }) {
  return (
    <ItemsGrid>
      {Array.from({ length: count }, (_, i) => (
        <ItemStyles key={i}>
          <p>
            <span className="mark">Loading..</span>
          </p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAYAAABGM/VAAAAAE0lEQVR42mP88eFHPQMaYKRMEACmQg2BkU84nQAAAABJRU5ErkJggg=="
            className="loading"
            alt="loading"
            width="500"
            height="400"
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}
