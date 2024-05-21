// components/UrlTile.tsx
import axios from 'axios';
import { useState, useEffect } from 'react';

interface MetaData {
      title: string;
      description: string;
      image: string;
      siteName: string;
}

interface UrlTileProps {
      url: string;
}

const UrlTile: React.FC<UrlTileProps> = ({ url }) => {
      const [metaData, setMetaData] = useState<MetaData | null>(null);

      useEffect(() => {
            const fetchMetaData = async () => {
                  try {
                        const res = await axios.get(`https://unfurl.io/api/v2?url=${encodeURIComponent(url)}`);
                        setMetaData(res.data);
                  } catch (error) {
                        console.error('Error fetching metadata:', error);
                  }
            };

            fetchMetaData();
      }, [url]);

      if (!metaData) return <div>Loading...</div>;

      return (
            <div className="url-tile">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={metaData.image} alt={metaData.title} className="thumbnail" />
                        <div className="details">
                              <h3>{metaData.title}</h3>
                              <p>{metaData.description}</p>
                              <span>{metaData.siteName}</span>
                        </div>
                  </a>
                  <style jsx>{`
        .url-tile {
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 16px;
          transition: box-shadow 0.3s;
        }
        .url-tile:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .thumbnail {
          width: 100%;
          height: auto;
        }
        .details {
          padding: 16px;
        }
        .details h3 {
          margin: 0;
          font-size: 1.1em;
        }
        .details p {
          margin: 8px 0;
          color: #555;
        }
        .details span {
          font-size: 0.9em;
          color: #888;
        }
      `}</style>
            </div>
      );
};

export default UrlTile;
