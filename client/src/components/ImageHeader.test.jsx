import React from 'react';
import { shallow } from 'enzyme';
import ImageHeader from './ImageHeader';

describe('ImageHeader', () => {
  let props;
  let wrapper;
  let useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  const listingObj = {
    _id: '5e2f337aaffaa90f63daf40f',
    listing_id: 32,
    listing_title: 'Stylish, cozy, private studio in Bernal Heights',
    listing_images: [{
      _id: '5e2f337aaffaa90f63daf41e',
      id: 301543080,
      url: 'https://a0.muscache.com/im/pictures/41e20bd6-da9a-4025-a297-024c41f0d27f.jpg?aki_policy=large',
      caption: "Snug studio with everything you'll need for a comfortable stay↵",
    }],
  };

  const dimensions = {
    height: 616,
    width: 1280,
  };


  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    // useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

    props = {
      listingObj: jest.fn().mockResolvedValue(listingObj),
      dimensions: jest.fn().mockResolvedValue(dimensions),
    };

    mockUseEffect();
    mockUseEffect();
    wrapper = shallow(<Authors {...props} />);
  });

  describe('on start', () => {
    it('loads the authors', () => {
      expect(props.fetchAuthors).toHaveBeenCalled();
    });

    it('does not load posts', () => {
      expect(props.fetchPosts).not.toHaveBeenCalled();
    });

    it('renders the authors', () => {
      expect(wrapper.find('Author')).toHaveLength(2);

      const firstAuthor = wrapper.find('Author').first();

      expect(firstAuthor.prop('author')).toEqual(alice);
      expect(firstAuthor.prop('activeAuthor')).toEqual(null);
    });
  });

  describe('given selected author', () => {
    beforeEach(() => {
      mockUseEffect();
      mockUseEffect();

      wrapper
        .find('Author')
        .first()
        .simulate('select', alice);
    });

    it('sets the active author', () => {
      expect(wrapper.find('Author')).toHaveLength(2);

      const firstAuthor = wrapper.find('Author').first();

      expect(firstAuthor.prop('author')).toEqual(alice);
      expect(firstAuthor.prop('activeAuthor')).toEqual(alice);
    });

    it('loads the right posts', () => {
      expect(props.fetchPosts).toHaveBeenCalledWith(alice.id);
    });

    it('renders the posts', () => {
      expect(wrapper.find('Post').prop('post')).toEqual(posts[0]);
    });
  });
});
