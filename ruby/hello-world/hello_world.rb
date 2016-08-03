class HelloWorld
    def self.hello(nom=nil)
        if nom
            return "Hello, #{nom}!"
        else
            return "Hello, World!"
        end
    end
end
