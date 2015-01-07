## Testing with rspec

### How to get started

Rspec is the testing framework we are going to be using for Ruby (including Rails). To get started:

`gem install rspec` (you might have to `sudo` this depending on your machine settings)

Once you have successfully installed rspec, create a new project:

1. rspec --init (this will create a .rspec and spec/spec_helper.rb file)
2. Inside your .rspec file make sure you have this text
```
--color
--require spec_helper
--format documentation
```

### Rspec matchers

Fortunately, the syntax is very similar to our previous testing matchers in node, here are just a few matchers, that should look similar to mocha/chai.

```
expect(actual).to be ___
expect(actual).to be_between(minimum, maximum).inclusive
expect(actual).to match(/expression/) # We will learn about this very soon!
expect(actual).to be true      # passes if actual == true
expect(actual).to be false     # passes if actual == false
expect(actual).to be_nil       # passes if actual is nil
expect(actual).to be_instance_of(Class)       # passes if actual is an instance of a certain Class
expect(actual).to exist        # passes if actual.exist? and/or actual.exists? are truthy
```

The rspec documentation is a great place to find more of these - you can find them [here](https://www.relishapp.com/rspec/rspec-expectations/v/3-1/docs/built-in-matchers)

### Writing your first test

Start with a describe block, and inside an it statement as well

```
require 'spec_helper'

describe "Some idea, variable or method" do
    it "is something or does something" do
        # expect...
    end
end
```

Let's start with some very simple tests

```
describe "Startin" do
  describe "something" do
    it "does something that passes" do
      expect(5).to eq(5)
    end

    it "does something that fails" do
      expect(5).to eq(3)
    end

    it "does something that is pending", pending: true do
      expect(5).to be < 3
    end

    xit "does something that is pending because we used xit", do
      expect(5).to be < 3 #this will be pending
    end
  end
```

### I'm getting errors!

1. Make sure you have done `rspec --init` so that you have a .rspec file and a spec folder with a spec_helper.rb file
2. Did you mean to do require_relative instead of require?
3. If you do use require_relative, make sure you have the exact path